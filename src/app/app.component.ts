import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelfIntroComponent } from "./self-intro/self-intro.component";
import { AboutComponent } from "./about/about.component";
import { WorkexperienceComponent } from "./workexperience/workexperience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectComponent } from "./project/project.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SelfIntroComponent, AboutComponent, WorkexperienceComponent, PortfolioComponent, ProjectComponent, ContactComponent, SkillsComponent]
})
export class AppComponent {
  title = 'Manan_portfolio';
}
