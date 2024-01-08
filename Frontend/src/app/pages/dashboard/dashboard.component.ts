import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filterText = '';
  objects: any[]=[];
  filteredObjects: any[] = [];
  searchByResp: string = '';
  searchByTipo: string = '';
  searchByCod: string = '';
  uniqueResps: string[] = [];
  uniqueTipos: string[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.dataService.getAllData().subscribe({
      next: (data: any[]) => {
        this.objects = data;
        console.log('Dados da API:', this.objects);
      },
      error: (error) => {
        console.error('Erro ao carregar dados do backend:', error);
      }
    });
  }

  extractUniqueValues() {
    this.uniqueResps = [...new Set(this.objects.map(item => item.resp))];
    this.uniqueTipos = [...new Set(this.objects.map(item => item.tipo))];
  }

  oneFilter() {
    this.filteredObjects = this.objects.filter(item =>
      item.resp.toLowerCase().includes(this.searchByResp.toLowerCase()) &&
      item.tipo.toLowerCase().includes(this.searchByTipo.toLowerCase()) &&
      item.tipo.toLowerCase().includes(this.searchByCod.toLowerCase())
    );
  }


  applyFilter() {
    this.filteredObjects = this.objects.filter(item =>
      item.cod.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.resp.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.descri.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.codfre.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.dtincl.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.tipo.toLowerCase().includes(this.filterText.toLowerCase())

    );
  }

  clearFilter() {
    this.filterText = '';
    this.applyFilter();
    this.oneFilter();
  }

  search() {
    this.applyFilter();
    this.oneFilter();
  }

  showAll() {
    this.filterText = '';
    this.searchByResp = '';
    this.searchByTipo = '';
    this.applyFilter();
    this.oneFilter();
  }

  logout() {
    this.router.navigateByUrl('/login').then(
      () => {
        console.log('Você está deslogando da sua conta do Sistema.');
      },
      (error) => {
        console.error('Erro ao redirecionar para a página de login.', error);
      }
    );
  }

}
