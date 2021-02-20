import Logo from "./images/XX.png";

export const colorSite = {
    border: "#BD2773",
    //#BD2773
    text: "white",
    background: "black",
}
export const logoSize = {
    pink: "100px;",
    white:"65px;",
}
export const textOptions = {
    policeBouttons: "font-family:none;",
    policeTitre: "font-family:OCR A Std, monospace;",
    isLogo: true,
    logoSize: "max-width: " + logoSize.pink,
}
export const textShadow = "text-shadow: 4px 4px 8px " + colorSite.border + ";"
export const styleBorder = "border: 2px solid " + colorSite.border + " !important;" +
    "\nbox-shadow: 0px 0px 14px " + colorSite.border + "; ";

export const LogoPath = Logo;
export const theme = {
    colors: colorSite,
    textOptions,
    styleBorder,
    textShadow,
    LogoPath
}
export default theme 