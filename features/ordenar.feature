Feature: Ordenar a listagem

    Como um usuário
    Desejo poder ordenar a listagem de jogos de diversas formas
    Para ter melhor identificação sobre características dos jogos

    Scenario: Ordenando por data de lançamento
    Given : Entro na página incial da aplicação
    And : Sou redirecionado para a home
    When : Eu interajo com o item para ordenar pela data de lançamento
    Then : Eu percebo que agora os items da lista estão em ordem de data de lançamento descendente
    And : Eu interajo novamente
    Then : Agora está em ordem ascendente

    Scenario: Ordenando por ordem alfabética do nome
    Given : Entro na página incial da aplicação
    And : Sou redirecionado para a home
    When : Eu interajo com o item para ordenar pelo nome dos jogos
    Then : Eu percebo que agora os items da lista estão ordenados de maneira alfabética descendente em relação ao nome dos jogos
    And : Eu interajo novamente
    Then : Agora está em ordem ascendente

    Scenario: Ordenando por ordem alfabética da desenvolvedora
    Given : Entro na página incial da aplicação
    And : Sou redirecionado para a home
    When : Eu interajo com o item para ordenar pelo nome das desenvolvedoras
    Then : Eu percebo que agora os items da lista estão ordenados de maneira alfabética descendente em relação ao nome das devs
    And : Eu interajo novamente
    Then : Agora está em ordem ascendente
