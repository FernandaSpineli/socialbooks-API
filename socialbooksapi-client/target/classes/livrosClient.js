$(function(){
	$(".js-load-books").on('click', function() {
		$.ajax({
			url: "http://localhost:8080/livros",
			type: "get",
			headers: {
				"Authorization" : "Basic YWxnYXdvcmtzOnMzbmg"
			},
			success:function(response){
				desenhaTabela(response);
			}
		});
	})
});

function desenhaTabela(dados){
	$(".js-books-table-body tr").remove();
	for(var i=0; i < dados.length; i++) {
		desenhaLinha(dados[i]);
	}
}

function desenhaLinha(linha){
	var linhaTabela = $("<tr/>");
	$(".js-books-table-body").append(linhaTabela);
	linhaTabela.append("<td]>" + linha.id + "</td>");
	linhaTabela.append("<td]>" + linha.nome + "</td>");
	linhaTabela.append("<td]>" + linha.editora + "</td>");
	linhaTabela.append("<td]>" + linha.publicacao + "</td>");
	linhaTabela.append("<td]>" + linha.resumo + "</td>");
}



