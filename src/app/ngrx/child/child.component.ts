import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import { IAppState } from "src/app/store/app.state";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  counter$ = this.store.select("app").pipe(
    map((state) => state.counter )
  );

  constructor(private store: Store<{ app: IAppState }>) {}
}
