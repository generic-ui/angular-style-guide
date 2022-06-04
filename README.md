# Style guide for Anguar


```
@Component({
	selector: 'div[basic][requiredInput]',
	template: `

		<div #viewChild></div>

		<div #viewChildren></div>

	`,
	host: {
		'[class.basic]': '"true"'
	},
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnChanges, OnInit {

	@ViewChild('viewChild', { read: ElementRef, static: true })
	readonly viewChild?: ElementRef;

	@ViewChildren('viewChild', { read: ElementRef })
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

	constructor() {
	}


	ngOnChanges(_changes: NgChanges<BasicComponent>): void {
	}

	ngOnInit(): void {
	}

	ngAfterContentInit(): void {

	}

	ngAfterViewInit(): void {
	}

}


```
