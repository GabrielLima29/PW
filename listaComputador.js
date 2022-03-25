deixe  dados ;

função  carregarDados ( cb ) {
    buscar ( "http://3tdsn2022.atwebpages.com/ListarComputor.php" )
        . then ( conteudo  =>  conteudo . text ( ) )
        . então ( ( texto )  =>  {
            dados  =  JSON . analisar ( texto ) ;
            cb ( ) ;
        } ) ;
}

função  exibirTabela ( ) {
    consola . log ( dados ) ;
    deixe  tabela  =  '' ;
    for ( deixe a  linha  nos  dados ) {
        tabela  +=  '<tr>' ;
        tabela  +=  `<td> ${ dados [ linha ] . PROCESSADOR } </td>` ;
        tabela  +=  `<td> ${ dados [ linha ] . usb } </td>` ;
        tabela  +=  `<td> ${ dados [ linha ] . atualizado  ===  '1' ? "Sim" : "Não" } </td>` ;
        tabela  +=  `<td> ${ dados [ linha ] . dataAtualizacao } </td>` ;
        tabela  +=  '</tr>' ;
    }
    documento . getElementsByTagName ( 'tbody' ) [ 0 ] . innerHTML  =  tabela ;
    
}

função  iniciar ( ) {
    carregarDados ( displayTabela )
}

janela . onload  =  iniciar ;
