import {Text, Button, IButtonProps, useTheme} from "native-base";

type Props = {
  title: string;
  isActive?: boolean;
  type: "open" | "closed";
} & IButtonProps;

export function Filter({title, isActive = false, type, ...rest}: Props) {
  const {colors} = useTheme();

  const typeColor = type === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={typeColor}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}>
      <Text color={isActive ? typeColor : "gray.100"}>{title}</Text>
    </Button>
  );
}
