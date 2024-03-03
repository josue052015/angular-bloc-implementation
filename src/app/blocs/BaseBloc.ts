import { BehaviorSubject } from 'rxjs';

export abstract class Bloc<
  BlocEvent,
  BlocState
> extends BehaviorSubject<BlocState> {
  /**
   * @description : you must give the bloc initial state to start
   */
  state: BlocState;
  constructor(initialState: BlocState) {
    super(initialState);
    this.state = initialState;
  }

  /**
   * @description : we use emit to emit new State to listeners
   */
  emitState(state: BlocState) {
    this.state = state;
    this.next(this.state);
  }

  abstract processEvent(event: BlocEvent): Map<BlocEvent, BlocState>;

  addState(event: BlocEvent) {
    // will work only in case of event is mapped to sepecefic state
    if (this.processEvent(event).has(event)) {
      this.emitState(this.processEvent(event).get(event) as BlocState);
    }
  }
}