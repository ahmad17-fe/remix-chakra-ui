import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Container,
} from "@chakra-ui/react";
import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: ENV.APP_TITLE }];
};

export default function Index() {
  return (
    <Container maxW="container.xl" py="4">
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        rounded="lg"
        w="full"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Hallo 👋
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </AlertDescription>
      </Alert>
    </Container>
  );
}
