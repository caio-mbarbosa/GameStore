import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

class TestPage(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome() 
        self.driver.get("http://localhost:4200/home")
        time.sleep(10)

    
    def test_lista_de_jogos(self):
        # Verifica se há elementos na lista de jogos
        lista_de_jogos = self.driver.find_elements(by=By.CLASS_NAME, value="gameList")  
        assert lista_de_jogos != None

        # Verifica o nome de todos os jogos na lista 
        for _ in lista_de_jogos:
            nome_do_jogo = self.driver.find_element(by=By.CLASS_NAME, value="gameTitle")
            assert nome_do_jogo != None
    
    def test_filtro_fav(self):
        # Nesse exemplo vou favoritar Diablo Immortal para filtrar depois e voltar para a lista não filtrada
        jogos_atuais = self.driver.find_elements(by=By.CLASS_NAME, value="gameEntry")

        for jogo in jogos_atuais:
            # encontra o título do jogo
            titulo_do_jogo = jogo.find_element(by=By.CLASS_NAME, value="gameTitle").text

            # verificar se o título é "Overwatch 2"
            if titulo_do_jogo == ("Diablo Immortal"): 
                # encontra o botão favorito
                botao_favorito = jogo.find_element(by=By.CLASS_NAME, value="heart-icon-container")

                # salvar o jogo como favorito
                botao_favorito.click()
                time.sleep(2)

        favoriteFilter = self.driver.find_element(by=By.XPATH, value="//span[@id='1']")
        favoriteFilter.click()
        time.sleep(2)
        favoriteFilter.click()
        time.sleep(2)

    def test_detalhes_do_jogo(self):
        
        jogos_atuais = self.driver.find_elements(by=By.CLASS_NAME, value="gameEntry")

        for jogo in jogos_atuais:
            # encontra o título do jogo
            titulo_do_jogo = jogo.find_element(by=By.CLASS_NAME, value="gameTitle").text

            # verificar se o título é "Overwatch 2"
            if titulo_do_jogo == "Overwatch 2": 

                # clica no link
                jogo.click()
                time.sleep(3)
                # Verificar se a URL é correta
                assert self.driver.current_url == "http://localhost:4200/game/540"
                break
        
    def test_salvar_favoritos(self):
        # Nesse exemplo vou favoritar Overwatch 2
        jogos_atuais = self.driver.find_elements(by=By.CLASS_NAME, value="gameEntry")

        for jogo in jogos_atuais:
            # encontra o título do jogo
            titulo_do_jogo = jogo.find_element(by=By.CLASS_NAME, value="gameTitle").text

            # verificar se o título é "Overwatch 2"
            if titulo_do_jogo == "Overwatch 2": 
                # encontra o botão favorito
                botao_favorito = jogo.find_element(by=By.CLASS_NAME, value="heart-icon-container")

                # salvar o jogo como favorito
                botao_favorito.click()
                time.sleep(2)
                self.driver.refresh()
                time.sleep(2)
                break
   

    """
    def test_ordenar_dev(self):
        filtro = self.driver.find_element(by=By.XPATH, value="//app-filter-dropdown[@label='Developers']")
        time.sleep(2)
        devSelecionada = filtro.find_element(by=By.XPATH, value="//app-filter-dropdown[@(option)='Blizzard Entretainment']")
        devSelecionada.click()
        time.sleep(3)
        jogos_atuais = self.driver.find_elements(by=By.CLASS_NAME, value="gameEntry")
        tituloDoTerceiro = jogos_atuais[2].find_element(by=By.CLASS_NAME, value="gameTitle").text
        assert tituloDoTerceiro == "Hearthstone: Heroes of Warcraft"
    """

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
