# Style guide for Anguar
Opinionated style guide for Angular

#


```
@Component({
	selector: 'div[model][requiredInput]',
	templateUrl: './model.component.html',
	styleUrls: [
		'./model.component.scss'
	],
	host: {
		'[class.model]': '"true"'
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class ModelComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@ViewChild('childRef', { read: ElementRef, static: true })
	readonly viewChild?: ElementRef;

	@ViewChildren('childRef', { read: ElementRef })
	readonly viewChildren?: QueryList<ElementRef>;

	@ContentChild('contentChild', { read: ElementRef, static: true })
	readonly contentChild?: ElementRef;

	@ContentChildren('contentChildren', { read: ElementRef })
	readonly contentChildren?: QueryList<ElementRef>;

	@Input()
	requiredInput!: string;

	@Input()
	optionalInputOne: string = '';

	@Input()
	optionalInputTwo?: number;

	@Output()
	readonly valueChanged = new EventEmitter<string>();

	constructor(private readonly elementRef: ElementRef,
	            private readonly httpClient: HttpClient) {
	}

	ngOnChanges(changes: NgChanges<ModelComponent>): void {
	
	    if (changes.requiredInput?.currentValue) {
	        // run code
	    }
	}

	ngOnInit(): void {
	}

	ngDoCheck(): void {
	}

	ngAfterContentInit(): void {
	}

	ngAfterContentChecked(): void {
	}

	ngAfterViewInit(): void {
	}

	ngAfterViewChecked(): void {
	}

	ngOnDestroy(): void {
	}

}


```

## Input
- Required inputs should be specified in the selector,
- Required inputs should be declared with an exclamation mark(non-null assertion),
- Optional inputs should be assigned with value,
- When the previous point is not possible not required inputs should be declared as optional with ? mark,
- Don't use setters for inputs, use ngOnChanges instead.

## Output
- Always initialize output variables on the declaration - assign value with new EventEmitter(),
- Declare property as readonly so no one reassigns it with a new value,
- Specify the type of EventEmitter.

## Query
- Declared as optional - they cannot be assigned at the start,
- Always specify readonly - developer can only read the value of the query property. The framework's responsibility is to set its value,
- Always specify correct read type.

## Life cycle hooks
- Declare in a component in the order of invocation:
  - ngOnChanges,
  - ngOnInit,
  - ngDoCheck,
  - ngAfterContentInit,
  - ngAfterContentChecked,
  - ngAfterViewInit,
  - ngAfterViewChecked,
  - ngOnDestroy.
- Always specify that component implements interfaces related to the used Life Cycle Hooks



### ngOnChanges
- Use for running code when one or many inputs changes 

### ngOnInit
- Initialize component, services, etc.

### ngDoCheck
- Don't use this method in production code, only for debugging specific cases


# Meta
- Don't use this properties in Component Metdata:
  - moduleId,
  - interpolation,
  - entryComponents,
  - preserveWhitespaces,
  - inputs,
  - outputs,
  - queries,
  - jit.

## Articles
- Angular component practices - https://generic-ui.com/blog/angular-component-practices
