import { ValidarCamposService } from "./../../shared/components/campos/validar-campos.service";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "dio-cadastro-filmes",
  templateUrl: "./cadastro-filmes.component.html",
  styleUrls: ["./cadastro-filmes.component.scss"],
})
export class CadastroFilmesComponent {
  cadastro: FormGroup;

  constructor(
    private validarService: ValidarCamposService,
    private fb: FormBuilder
  ) {
    this.cadastro = this.fb.group({
      titulo: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(256),
        ],
      ],
      urlFoto: ["", [Validators.minLength(10)]],
      dtLancamento: ["", [Validators.required]],
      descricao: [""],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlImdb: ["", [Validators.minLength(10)]],
      genero: ["", [Validators.required]],
    });
  }

  get f() {
    return this.cadastro.controls;
  }

  salvar(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }
  }

  reiniciarForm() {
    this.cadastro.reset();
  }
}
