import { ReactNode } from "react";
import { ContainerSectionTitle } from "./styles";
import { RegularText } from "../../../../components/Typography";

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <ContainerSectionTitle>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </ContainerSectionTitle>
  );
}
