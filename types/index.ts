export interface NavigationItem {
  id: number;
  href: string;
  label: string;
}

export interface HeroProps {
  pinRef: React.RefObject<HTMLDivElement>;
  primaryImageRef: React.RefObject<HTMLDivElement>;
  namesRef: React.RefObject<HTMLHeadingElement>;
  complemntaryImageOneRef: React.RefObject<HTMLDivElement>;
  complemntaryImageTwoRef: React.RefObject<HTMLDivElement>;
  complemntaryImageThreeRef: React.RefObject<HTMLDivElement>;
  complemntaryImageFourRef: React.RefObject<HTMLDivElement>;
}

export interface NavbarProps {
  navRef: React.RefObject<HTMLElement>;
  navigation: NavigationItem[];
}

export interface HorizontalContainerProps {
  horizontalContainerRef: React.RefObject<HTMLDivElement>;
  horizontalWrapperRef: React.RefObject<HTMLDivElement>;
}