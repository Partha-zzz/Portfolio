export interface MetricItem {
  id: string;
  metricNumber: string;
  label: string;
  value: string;
  numericValue: number;
  colorVariant?: "white" | "yellow" | "purple";
  accentCorner?: boolean;
}

export const METRICS: MetricItem[] = [
  {
    id: "hackathon-wins",
    metricNumber: "METRIC 01",
    label: "HACKATHON WIN",
    value: "1",
    numericValue: 1,
    colorVariant: "white",
    accentCorner: true,
  },
  {
    id: "hackathon-finalists",
    metricNumber: "METRIC 02",
    label: "HACKATHON FINALIST APPEARANCES",
    value: "5",
    numericValue: 5,
    colorVariant: "yellow",
    accentCorner: true,
  },
  {
    id: "credentials-achievements",
    metricNumber: "METRIC 03",
    label: "CREDENTIALS & ACHIEVEMENTS",
    value: "14",
    numericValue: 14,
    colorVariant: "white",
    accentCorner: true,
  },
  {
    id: "projects-experiments",
    metricNumber: "METRIC 04",
    label: "PROJECTS & EXPERIMENTS",
    value: "8",
    numericValue: 8,
    colorVariant: "white",
    accentCorner: true,
  },
];
