export class TitleState {
  constructor() {
    const titlefont = new FontFace("VCR", "url(assets/shared/fonts)");
    await titlefont.load();
    document.fonts.add(titlefont);
  }
}
