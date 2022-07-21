import { useNavigation } from "@react-navigation/native";
import {Heading, HStack, IconButton, StyledProps, useTheme} from "native-base";
import {CaretLeft} from "phosphor-react-native";

type Props = {
  title: string;
} & StyledProps;

function Header({title, ...rest}: Props) {
  const {colors} = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      pb={6}
      pt={12}
      bg="gray.600"
      {...rest}>
      <IconButton icon={<CaretLeft color={colors.gray[200]} size={24} />} onPress={handleGoBack}/>

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        pl={-6}>
        {title}
      </Heading>
    </HStack>
  );
}

export default Header;
