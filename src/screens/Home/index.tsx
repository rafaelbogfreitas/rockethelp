import {useNavigation} from "@react-navigation/native";
import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from "native-base";
import {color} from "native-base/lib/typescript/theme/styled-system";

import {ChatTeardropText, SignOut} from "phosphor-react-native";
import {useState} from "react";

// Assets
import Logo from "../../assets/logo_secondary.svg";
import Button from "../../components/Button";
import {Filter} from "../../components/Filter";
import Order, {OrderProps} from "../../components/Order";

function Home() {
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: "1",
      patrimony: "123456",
      when: "18/07/2022 às 10:00",
      status: "open",
    },
    {
      id: "2",
      patrimony: "123456",
      when: "18/07/2022 às 10:00",
      status: "closed",
    },
    {
      id: "3",
      patrimony: "123456",
      when: "18/07/2022 às 10:00",
      status: "closed",
    },
    {
      id: "4",
      patrimony: "123456",
      when: "18/07/2022 às 10:00",
      status: "open",
    },
  ]);

  const {colors} = useTheme();
  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate("new");
  }

  function handleDetails(orderId: string) {
    navigation.navigate("details", {orderId});
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}>
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={8}
          mb={4}
          w="full">
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title="em andamento"
            type="open"
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />
          <Filter
            title="finalizado"
            type="closed"
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Order data={item} onPress={() => handleDetails(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {"\n"}
                solicitações em{" "}
                {statusSelected === "open" ? "em aberto" : "finalizadas"}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}

export default Home;
