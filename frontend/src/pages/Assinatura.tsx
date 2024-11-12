import { useEffect, useState } from "react";
import { Nav_bar } from "../components/NavBar/Navbar";
import { client } from "../services/client";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Footer } from "../components/Footer/Footer";
import { Box, Checkbox, VStack, Text, Image, Heading, Button } from '@chakra-ui/react';
import { Produto } from "../types/Produto";
import { Spinner } from "react-bootstrap";
import { Loading } from "../components/Loading";

export function Assinatura() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const [emailUser, setEmail] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const planos = [
    {
      assinatura_id: 24,
      nome: 'Plano Mensal',
      valor: 40,
      descricao: 'Acesso mensal a todos os conteúdos.',
    },
    {
      assinatura_id: 25,
      nome: 'Plano Semestral',
      valor: 200,
      descricao: 'Acesso por 6 meses com desconto.',
    },
    {
      assinatura_id: 26,
      nome: 'Plano Anual',
      valor: 400,
      descricao: 'Acesso por 1 ano com o maior desconto.',
    },
  ];
  const handleCheckboxChange = (planId: number) => {
    setSelectedPlan(planId === selectedPlan ? null : planId);
  };
  const selectedPlanData = planos.find(plan => plan.assinatura_id === selectedPlan);
  var compra = 0;
  useEffect(() => {
    setIsLoading(true);
    document.title = 'Assinatura';
    client.get("/accounts/usuario")
      .then(response => {
        setCurrentUser(true);
        setEmail(response.data.user.email);
      })
      .catch(error => {
        setCurrentUser(false);
        navigate('/login');
      });
      setIsLoading(false);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    client.post('/compra/compra-create/',
      {
        email: emailUser,
        products: [selectedPlanData?.assinatura_id],
        quantity: [1],
        valor_total: selectedPlanData?.valor
      })
      .then(response => {
        compra = response.data.compra_id;
        navigate(`/resumo-compra/${compra}`);
        window.location.reload();
      }, error => {
        toast.error("Erro ao realizar a compra");
      });
    setIsLoading(false);
  }

  return (
    <div>
      <Nav_bar />
      <ToastContainer />
      {currentUser && !isLoading ? (
        <div className="container text-center mt-5">
          <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>
              Escolha seu Plano de Assinatura
            </Heading>
            <VStack align="start">
              {planos.map(plan => (
                <Checkbox
                  key={plan.assinatura_id}
                  isChecked={selectedPlan === plan.assinatura_id}
                  onChange={() => handleCheckboxChange(plan.assinatura_id)}
                >
                  {plan.nome} - R${(plan.valor).toFixed(2).replace('.', ',')}
                </Checkbox>
              ))}
            </VStack>

            <Box p={4} mt="3">
              <Box className="d-flex flex-wrap" alignItems="start" >
                <Image
                  src="/images/streamings.jpg"
                  alt="Streamings"
                  boxSize={{ md: "400px" }}
                  objectFit="cover"
                  borderRadius="md"
                  mb={5}
                  mr={5}
                />
                <Text flex="1" minW="30vw">
                  <VStack align="start" spacing={4}>
                    <Heading as="h3" size="lg">
                      Todos os Canais Liberados
                    </Heading>
                    <Text textAlign={"justify"}>
                      Cansou de travamentos e de pagar uma fortuna por meia dúzia de canais? Nossa plataforma é a Solução.
                    </Text>
                    <Text textAlign={"justify"}>
                      ✅ Todos os Canais Pagos
                      <br />
                      ✅ Todos os Canais Abertos
                      <br />
                      ✅ Canais 24h de Desenhos, Filmes, Animes, Séries...
                    </Text>
                    <Text textAlign={"justify"} mb={4}>
                      Globo, SBT, Rede TV, Record TV, Band, Dazn, Pay-Per-View, HBO Max, Premiere, Estaduais, Canais de Esporte, SporTV, ESPN, Fox Sports, A&E, Cinemax, Film & Art, FX, MegaPix, Paramount, Space, SyFy, TBS, TCM, TNT, Warner Channel, Todos os Canais Telecine, Todos os Canais HBO, Todos os Canais Star, Todos os Canais Discovery, Todos os Canais de Documentários, Canais de Arte, Todos os Canais Infantis, Todos os Canais de Notícias Nacionais e Internacionais, Canais de Séries, Animes, Religiosos, NBA, NFL, F1, Eleven
                    </Text>
                  </VStack>
                </Text>
              </Box>
            </Box>

            {selectedPlanData && (
              <Box mt={6} p={4} borderWidth={1} borderRadius="md">
                <Heading as="h3" size="md">{selectedPlanData.nome}</Heading>
                <Text>{selectedPlanData.descricao}</Text>
                <Text fontWeight="bold">R${(selectedPlanData.valor).toFixed(2).replace('.', ',')}</Text>
              </Box>
            )}

            <Button 
            mt={4} 
            colorScheme="purple" 
            isDisabled={!selectedPlan || isLoading} 
            onClick={handleSubmit}>
              {isLoading ? ("Confirmando Assinatura...") : ("Confirmar Assinatura")}
            </Button>
          </Box>
        </div>
      ): <Loading height="70vh" withPhrase={true}/>}
      <Footer />
    </div>
  );

}  