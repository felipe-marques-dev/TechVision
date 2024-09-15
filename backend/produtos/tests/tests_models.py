from django.test import TestCase, Client

from produtos.models import Produto



class ApiProdutoTestCase(TestCase):


    def setUp(self):
        # Configurações iniciais para os testes
        self.produto = Produto.objects.create(
            name='fone_teste',
            category='Eletrônicos',
            sub_category='Audio',
            description='fone teste',
            estoque=999,
            price=22.4,
            promotion=False,
        )

    def test_consulta_produtos(self):
        response = self.client.get('/produtos/itens/')
        self.assertTrue(response.status_code, 200)
    
    def test_consulta_produto_individual(self):
        urlName = Produto.objects.values('url_name').filter(product_id=1)
        response = self.client.get(f'/produtos/itens/{urlName}')
        self.assertTrue(response.status_code, 200)
    
    def test_excluir_produto(self):
        produto = Produto.objects.filter(product_id=1)
        produto.delete()
        self.assertFalse(produto.exists())