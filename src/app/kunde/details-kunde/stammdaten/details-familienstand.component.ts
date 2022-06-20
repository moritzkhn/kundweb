import { Component, Input, type OnInit } from "@angular/core";
import { type FamilienstandType } from "../../shared/kunde";
import log from "loglevel";

/**
 * Komponente f&uuml;r das Tag <code>hs-details-familienstand</code>
 */
@Component({
  selector: "hs-details-familienstand",
  templateUrl: "./details-familienstand.component.html",
})
export class DetailsFamilienstandComponent implements OnInit {
  @Input()
  familienstand: FamilienstandType | undefined;

  ngOnInit() {
    log.debug(
      "DetailsFamilienstandComponent.familienstand=",
      this.familienstand
    );
  }
}
