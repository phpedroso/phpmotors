$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true,
    });
    
    $('.menu-hamburguer').click(function() { 
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate( {
        rules: { 
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        }, 
        messages : {
            nome: 'Por favor, digite o seu nome completo',
            telefone : 'Digite um telefone válido',
            email: 'Digite um e-mail válido'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            console.log(camposIncorretos);
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);
        
        $('html').animate( {
            scrollTop: destino.offset().top
        }, 1000)
    })
})