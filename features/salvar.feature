Feature: Salvar Favoritos

    Como usuário
    Desejo poder salvar um jogo como favorito
    Para poder ter um acesso rápido de quais jogos gostei mais

    Scenario: Salvando o jogo com sucesso
    Given : Entro na página incial da aplicação
    And : Sou redirecionado para a home
    When : Eu interajo com o item para salvar o jogo nos favoritos
    Then : O jogo foi favoritado
    And : Eu recebo um feedback visual para indicar que o jogo está favoritado