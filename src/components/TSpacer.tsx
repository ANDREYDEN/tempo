import { View } from "react-native";
import { Spacing } from "../styling/spacing";

interface TSpacerProps {
  height?: Spacing;
  width?: Spacing;
}
export function TSpacer({ height, width }: TSpacerProps) {
  return <View style={{ height, width }} />;
}

TSpacer.V = function TSpacerV({ height }: { height: Spacing }) {
  return <View style={{ height }} />;
};

TSpacer.V_4 = function TSpacerV_4() {
  return <TSpacer.V height={Spacing.xs_4} />;
};

TSpacer.V_8 = function TSpacerV_8() {
  return <TSpacer.V height={Spacing.sm_8} />;
};

TSpacer.V_16 = function TSpacerV_16() {
  return <TSpacer.V height={Spacing.md_16} />;
};

TSpacer.V_24 = function TSpacerV_24() {
  return <TSpacer.V height={Spacing.lg_24} />;
};

TSpacer.V_32 = function TSpacerV_32() {
  return <TSpacer.V height={Spacing.xl_32} />;
};

TSpacer.H = function TSpacerH({ width }: { width: Spacing }) {
  return <View style={{ width }} />;
};

TSpacer.H_4 = function TSpacerH_4() {
  return <TSpacer.H width={Spacing.xs_4} />;
};

TSpacer.H_8 = function TSpacerH_8() {
  return <TSpacer.H width={Spacing.sm_8} />;
};

TSpacer.H_16 = function TSpacerH_16() {
  return <TSpacer.H width={Spacing.md_16} />;
};

TSpacer.H_24 = function TSpacerH_24() {
  return <TSpacer.H width={Spacing.lg_24} />;
};

TSpacer.H_32 = function TSpacerH_32() {
  return <TSpacer.H width={Spacing.xl_32} />;
};
