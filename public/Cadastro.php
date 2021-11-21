<?php 
session_start();
?>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

<div class="container ctn col-10">
    <div class="card text-center">

        <div id="topo" class="card-header">
          Já é cadastrado ? <a href="#"> Acessar a conta</a>
        </div>
    <div  class="row form">
        <div class="col-12">
            <form action="#"  method="post" id="formulario">
                <!--PASSO 1-->
                <div id="step_1" class="step" id="form-total">
                    <fieldset>
                        <div class="form-row">
                            <label for="job" class="label-radio">Dados Pessoais<hr></label>
                            
                            <div class="form-file">
                                <input type="file" class="inputfile" name="your_picture" id="your_picture"  onchange="readURL(this);" data-multiple-caption="{count} files selected" multiple />
                                <label for="your_picture">
                                    <figure>
                                        <img src="img/user.png" alt="Fazer upload da foto de perfil" class="your_picture_image">
                                    </figure>
                                    <span class="file-button">Escolher Imagem</span>
                                </label>
                            </div>
                            <div class="form-row form-input-flex col-9">
                                <div class="form-input">
                                    <label for="Fnome">Primeiro nome </label>
                                    <input type="text" name="first_name" id="Fnome" placeholder="Primeiro nome" required />
                                    </div>
                                <div class="form-input">
                                    <label for="Lnome">Último nome </label>
                                    <input type="text" name="last_name" id="Lnome" placeholder="Último nome" required/>
                                </div>
                                <div class="form-input">
                                    <label for="email">Email </label>  
                                    <input type="text" name="email" id="email" placeholder="Email" required/>  
                                </div>
                           
                                <div class="form-input">
                                    <label for="senha">Senha</label>
                                    <input type="password" name="senha" id="senha" placeholder="senha"/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>     
                <!--PASSO 2-->           
                <div id="step_2" class="step">
                    
                    <fieldset>
                        <div class="form-radio itens">
                            <label for="job" class="label-radio">O que você mais gosta ? <hr></label>
                              <div class="form-flex iten" id="escolha">
                                <div class="form-radio">
                                    <input type="radio" name="job" value="designer" id="designer" />
                                    <label for="designer">
                                        <figure>
                                            <img src="img/designer.png" alt="Opção de Designer">
                                        </figure>
                                        <span>Designer</span>
                                    </label>
                                </div>
                                <div class="form-radio">
                                    <input type="radio" name="job" value="Front-End" id="coder"/>
                                    <label for="coder">
                                        <figure>
                                            <img src="img/front.png" alt="Opção de Front-End">
                                        </figure>
                                        <span>Front-End</span>
                                    </label>
                                </div>
                                <div class="form-radio">
                                    <input type="radio" name="job" value="Back-End" id="developer" />
                                    <label for="developer">
                                        <figure>
                                            <img src="img/back.png" alt="Opção de Back-End">
                                        </figure>
                                        <span>Back-End</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>   
                <!--PASSO 3-->             
                <div id="step_3" class="step">
                    <fieldset>
                        <div class="form-row form-input-flex">
                            <label for="job" class="label-radio">Endereço <hr></label>
                            
                            <div class="form-input">
                                <label for="cep">CEP</label>
                                <input type="number" name="cep" id="cep" placeholder="cep" />
                            </div>
                            <div class="form-input">
                                <label for="street_name">Rua</label>
                                <input type="text" name="street_name" id="street_name" placeholder="Rua" />
                            </div>
                            <div class="form-input">
                                <label for="street_number">Número</label>
                                <input type="text" name="street_number" id="street_number" placeholder="Número" />
                            </div>
                       
                            <div class="form-input">
                                <label for="city">Cidade</label>
                                <input type="text" name="city" id="city" placeholder="Cidade" />
                            </div>
                            <div class="form-input">
                                <label for="bairro">bairro</label>
                                <input type="text" name="bairro" id="bairro" placeholder="bairro" />
                            </div>
                            <div class="form-input">
                                <label for="pais">País</label>
                                <select name="pais" id="pais">
                                    <option value="">País</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>
                        </div>
                            
                    </fieldset>
                        
                </div>
                <!--PASSO 4 - Exibindo o resultado do formulário na tela-->
                <div id="step_4" class="step">
                    <fieldset>
                        <div class="form-radio itens">
                            <label for="job" class="label-radio">Confirmar Dados ? <hr></label>
                            <div class="form-row table-responsive form-input-flex">
                                <table class="table col-12">
                                    <tbody>
                                        <tr class="space-row">
                                            <th>Nome Completo:</th>
                                        </tr>

                                            <tr class="space-row">    
                                            <td id="fullname-val">Marcos Paulo Tavares</td>
                                        </tr>

                                        <tr class="space-row">
                                            <th>Email:</th>
                                        </tr>
                                        <tr class="space-row">    
                                            <td id="email-val">marcospauloctavares@gmail.com</td>
                                        </tr>

                                        <tr class="space-row">
                                            <th>Do que gosta mais:</th>
                                        </tr> 
                                        <tr class="space-row">   
                                            <td id="designer-val"></td>
                                        </tr>

                                        <tr class="space-row">
                                            <th>Endereço:</th>
                                        </tr> 
                                        <tr class="space-row">   
                                            <td id="street-val">Rua Pequiri, 290</td>
                                        </tr>
                                     </tbody>
                                </table>
                            </div>
                        </div>
                    </fieldset>
    
                </div> 
                        
            </form>     
            <div class="button">
                <div>
                    <button type="submit" onclick="funcao1()" value="Exibir Alert" class="btn" id="submit" form="formulario">Confirmar</button>
                </div>
                <div>
                    <button class="btn" id="next" onclick="capturar()">Próximo</button>
                </div>
                <div>
                    <button class="btn" id="prev">Anterior</button>
                </div>
                
            </div>
        
        </div>
    </div>  
  
    <div id="footer" class="card-footer">
        Esqueceu sua senha ? <a href="#">Recuperar senha</a>
      </div>
    </div>
    </div>

    <script src="./js/cadastroform.js"></script>