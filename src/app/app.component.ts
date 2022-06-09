
import { Component, OnInit } from '@angular/core';
import { Categoria } from './models/categoria';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  categorias: Categoria[];
  categoriaForm: Categoria;

  displayModal: boolean;

  constructor(private dataService: DataService) {
    this.categoriaForm = new Categoria();
    this.categorias = [];
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.dataService.getCategoria().subscribe(
      (res) => {
        this.categorias = res;
        this.displayModal = false;
      }
    );
  }

  obtenerCategoriasById(categoria: Categoria) {
    this.categoriaForm = { ...categoria };
    this.displayModal = true;
  }

  guardarCategoria() {
    this.dataService.saveCategoria(this.categoriaForm).subscribe(
      () => {
        this.categoriaForm = new Categoria();
        this.obtenerCategorias();
      }
    );
  }

  editarCategoria() {
    this.dataService.editCategoria(this.categoriaForm).subscribe(
      (res) => {
        this.categoriaForm = res;
        this.obtenerCategorias();
      }
    );
  }

  confirmar() {
    if (this.categoriaForm.id) {
      this.editarCategoria();
    } else {
      this.guardarCategoria();
    }
  }


  eliminarCategoria(categoria: Categoria) {
    this.dataService.deleteCategoria(categoria).subscribe(
      (res) => {
        this.categoriaForm = res;
        this.obtenerCategorias();
      }
    );
  }


  abrirModal() {
    this.displayModal = true;
    this.categoriaForm = new Categoria();
  }

  cerrarModal() {
    this.displayModal = false;
  }

}
