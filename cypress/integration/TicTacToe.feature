Feature: Praticar jogo da velha
    COMO jogador
    DESEJO praticar partidas
    PARA vencer ou perder

    # Espaços do jogo da velha
    # A1 A2 A3
    # B1 B2 B3
    # C1 C2 C3
    # 
    # Primeiro jogador sempre é X
    #

    #Regra 1: Item deve ser marcado ao clicar
    Scenario: Marcar no espaço A1
        Given que não exista nenhum elemento marcado no espaço "A1"
        When tento marcar na posição "A1"
        Then o espaço "A1" será marcado
        And próximo jogador é "O"

    #Regra 2: Não deve deixar marcar um espaço já marcado
    Scenario: Marcar um espaço já preenchido
        Given que a posição "A3" já está marcada com X
        When tento marcar a posição "A3"
        Then o espaço "A3" não deve ser alterado e continuar sendo "X"

    #Regra 3: Permitir desfazer uma marcação
    Scenario: Desfazer uma marcação previamente realizada
        Given que a posição "C2" foi marcada
        When tento desfazer essa ação
        Then a posição "C2" deve ser desmarcada e ficar vazia

    #Regra 4: Permitir refazer a ação de desfazer
    Scenario: Refazer ação de desfazer marcação
        Given que a posição "C1" foi marcado e desfeita a ação
        When tento refazer a ação
        Then a posição "C1" deve permanecer marcada com "X"

    #Regra 5: Iniciar novo jogo vazio
    Scenario: Após duas jogadas, iniciar um novo jogo vazio
        Given que as posições "A1" e "C3" estão marcadados
        When inicio um novo jogo
        Then as posições "A1" e "C3" devem ficar vazias

    #Regra 6: Quando for a vez do jogador "O" o background deve ficar preto
    Scenario: No turno do jogador O, a tela deve ficar preta para simbolizar seu turno
        Given que a posição "B2" foi marcada pelo jogador "X"
        When o turno é do jogador "O"
        Then o fundo de tela deve ficar preto

    #Regra 7: Vencer o jogo com jogada diagonal
    Scenario: Após 4 rodadas, o jogador X pode sair como vencedor
        Given que a posição "A1", "A2", "A3" e "B2" estão marcadas
        When marco a posição "C3"
        Then o jogador "X" deve sair como vitorioso
