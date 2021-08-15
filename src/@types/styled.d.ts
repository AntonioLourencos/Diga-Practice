import "styled-components";
import { Default } from "./../styles/themes/Default";

export type Theme = typeof Default;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
