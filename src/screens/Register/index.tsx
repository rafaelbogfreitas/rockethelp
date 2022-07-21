import { useNavigation } from "@react-navigation/native";
import {VStack} from "native-base";
import Button from "../../components/Button";

// Components
import Header from "../../components/Header";
import Input from "../../components/Input";

function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />

      <Input
        placeholder="Patrimônio"
        mt={4}
      />

      <Input
        placeholder="Descrição do problema"
        mt={5}
        flex={1}
        multiline
        textAlignVertical="top"
      />

      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
}

export default Register;
