package com.algaworks.socialbooks.services.exception;

public class LivroNaoEncontradoException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8283667214556167299L;
	
	
	public LivroNaoEncontradoException(String mensagem) {
		super(mensagem);
	}
	public LivroNaoEncontradoException(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}
}
