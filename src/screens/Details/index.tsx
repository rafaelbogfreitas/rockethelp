import { useRoute } from '@react-navigation/native';
import { Text, VStack } from 'native-base';
import Header from '../../components/Header';

type RouteParams = {
  orderId: string;
};

function Details() {
  const { params } = useRoute();
  const { orderId } = params as RouteParams;

  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Solicitação" />
      <Text color="white" textAlign="center" mt={20}>{JSON.stringify({ orderId })}</Text>
    </VStack>
  );
}

export default Details;