import { Injectable, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private renderer!: Renderer2;
  private colorTheme!: any;

  tokenAuth: string | null = 'demo';
  constructor(rendererFactory: RendererFactory2) {
    this.tokenAuth = localStorage.getItem('token');
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public getToken(): string {
    return this.tokenAuth || '';
  }

  public setToken(valueToken: string): void {
    this.tokenAuth = valueToken;
    console.log(this.tokenAuth);
  }

  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  update(theme: 'dark-mode' | 'light-mode') {
    this.setColorTheme(theme);
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  isDarkMode() {
    return this.colorTheme === 'dark-mode';
  }

  private setColorTheme(theme:any) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      this.colorTheme = localStorage.getItem('user-theme');
    } else {
      this.colorTheme = 'light-mode';
    }
  }
}
