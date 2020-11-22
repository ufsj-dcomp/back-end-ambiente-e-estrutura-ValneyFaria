# back-end-ambiente-e-estrutura-ValneyFaria
back-end-ambiente-e-estrutura-ValneyFaria created by GitHub Classroom

Comando para inserção na tabela cultura
INSERT INTO cultura(tipo_cultura,data_plantio,dias_colheita,qtd_plantada) VALUES ('couve', '2020/11/04', 60, 346.89);

Verifica o status do mysql
sudo service mysql status

https://www.alura.com.br/artigos/como-utilizar-os-comandos-insert-select-update-e-delete-em-sql#:~:text=Inserindo%20dados%20na%20tabela%20com%20INSERT&text=Para%20usar%20o%20INSERT%20devemos,que%20serão%20inseridos%20nas%20colunas.

https://www.hostnet.com.br/info/exportacao-do-banco-via-mysql-workbench/

https://www.devmedia.com.br/introducao-ao-novo-mysql-workbench/25939

('couve', '2020/11/04', 60, 346.89)

https://codeforgeek.com/update-code-without-restarting-node-server/


Install Angular:
    npm install -g @angular/cli
FONTE: https://angular.io/guide/setup-local

Para executar dentro da pasta 
~/Área de Trabalho/TEC WEB/back-end-ambiente-e-estrutur-ValneyFaria/Codigo/Frontend-Hortela:

    ng serve --open --port 4202

Erros:

    Error from chokidar (/home/valneyfaria/Área de Trabalho/TEC WEB/back-end-ambiente-e-estrutura-ValneyFaria/Codigo/Frontend-Hortela): Error: ENOSPC: System limit for number of file watchers reached, watch '/home/valneyfaria/Área de Trabalho/TEC WEB/back-end-ambiente-e-estrutura-ValneyFaria/Codigo/Frontend-Hortela/tslint.json'

    Solução:
        Aumentar o limite de user watches no sistema operacional.

        Verificar o limite atual:

        cat /proc/sys/fs/inotify/max_user_watches
            8192

        Ajustar o novo limite no arquivo /etc/sysctl.conf:

        echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

        O comando acima acrescentou a linha "fs.inotify.max_user_watches=524288" ao arquivo /etc/sysctl.conf e em seguida pediu ao kernel para recarregar as novas configurações.

        Verificar o novo limite:

        cat /proc/sys/fs/inotify/max_user_watches
            524288
            
FONTE: https://www.vivaolinux.com.br/dica/Error-ENOSPC-System-limit-for-number-of-file-watchers-reached-Resolvido

Instalar Bootstrap
    npm install bootstrap
Instalar JQuery
    npm install jquery

Em Frontend-Hortela/src/app/angular.json, inserir:
    Em styles:
        "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.css"
        ]
    Em scripts:
        "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]

Para iniciar o service:
    ng generate service cultura

Definindo valor padrao para uma coluna do SQL
    ALTER TABLE MYEMP ALTER COLUMN JOB SET DEFAULT 'PENDING'
https://www.ibm.com/support/knowledgecenter/en/SSEPEK_12.0.0/admin/src/tpc/db2z_changecolumndefault.html

Limpar a tabela:
	DELETE FROM cultura WHERE idcultura > 0;
Resetar o autoincremento:
	ALTER TABLE cultura AUTO_INCREMENT = 1;