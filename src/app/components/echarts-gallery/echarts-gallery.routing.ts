import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { EChartsGalleryComponent } from './echarts-gallery.component';

const EchartsGalleryRoutes: Routes = [
    {
        path: '', component: EChartsGalleryComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(EchartsGalleryRoutes)],
    exports: [RouterModule]
})

export class EChartsGalleryRoutingModule { }

