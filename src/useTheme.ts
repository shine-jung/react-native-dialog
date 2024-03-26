import { useMemo } from "react";
import { ColorSchemeName, StyleSheet } from "react-native";

export type StyleBuilder = (isDark: boolean) => StyleSheet.NamedStyles<any>;

export interface UseTheme {
  theme: ColorSchemeName;
  isDark: boolean;
  styles: StyleSheet.NamedStyles<any>;
}

const useTheme = (buildStyles: StyleBuilder): UseTheme => {
  const colorScheme = "light";
  const isDark = false;

  const styles = useMemo(() => {
    return buildStyles(isDark);
  }, [buildStyles, isDark]);

  return { theme: colorScheme, isDark, styles };
};

export default useTheme;
