import {Button as ButtonNativeBase, IButtonProps, Heading} from "native-base";

type Props = {
  title: string;
} & IButtonProps;

function Button({title, ...rest}: Props) {
  return (
    <ButtonNativeBase
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}>
      <Heading color="white" fontSize="sm">{title}</Heading>
    </ButtonNativeBase>
  );
}

export default Button;