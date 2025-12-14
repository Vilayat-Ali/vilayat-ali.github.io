export type ColorType = 
  | 'blue'
  | 'purple'
  | 'green'
  | 'yellow'
  | 'red'
  | 'orange'
  | 'cyan'
  | 'teal'
  | 'slate'
  | 'amber'
  | 'gray';

export interface Meta {
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface WorkArea {
  id: string;
  emoji: string;
  title: string;
  description: string;
  color: ColorType;
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  color: ColorType;
}

export interface TechItem {
  name: string;
  icon: string;
  url: string;
  color: ColorType;
}

export interface TechStack {
  languages: TechItem[];
  runtimes: TechItem[];
  backendFrameworks: TechItem[];
  frontendFrameworks: TechItem[];
  machineLearning: TechItem[];
}

export interface CTAButton {
  text: string;
  url: string;
  variant: 'primary' | 'secondary';
  target?: '_blank' | '_self';
}

export interface CTA {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export interface HomePageData {
  meta: Meta;
  workAreas: WorkArea[];
  interests: Interest[];
  techStack: TechStack;
  cta: CTA;
}

// Color mappings for Tailwind classes
export const colorClasses: Record<ColorType, string> = {
  blue: "hover:border-blue-500",
  purple: "hover:border-purple-500",
  green: "hover:border-green-500",
  yellow: "hover:border-yellow-500",
  red: "hover:border-red-500",
  orange: "hover:border-orange-500",
  cyan: "hover:border-cyan-500",
  teal: "hover:border-teal-500",
  slate: "hover:border-slate-500",
  amber: "hover:border-amber-500",
  gray: "hover:border-gray-500"
};

export const colorHoverClasses: Record<ColorType, string> = {
  blue: "hover:bg-blue-500/10 hover:border-blue-500/50",
  purple: "hover:bg-purple-500/10 hover:border-purple-500/50",
  green: "hover:bg-green-500/10 hover:border-green-500/50",
  yellow: "hover:bg-yellow-500/10 hover:border-yellow-500/50",
  red: "hover:bg-red-500/10 hover:border-red-500/50",
  orange: "hover:bg-orange-500/10 hover:border-orange-500/50",
  cyan: "hover:bg-cyan-500/10 hover:border-cyan-500/50",
  teal: "hover:bg-teal-500/10 hover:border-teal-500/50",
  slate: "hover:bg-slate-500/10 hover:border-slate-500/50",
  amber: "hover:bg-amber-500/10 hover:border-amber-500/50",
  gray: "hover:bg-gray-500/10 hover:border-gray-500/50"
};

export const textColors: Record<ColorType, string> = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  green: "text-green-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
  orange: "text-orange-400",
  cyan: "text-cyan-400",
  teal: "text-teal-400",
  slate: "text-slate-300",
  amber: "text-amber-300",
  gray: "text-gray-300"
};