import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	ContentChildren,
	DoCheck,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	ViewChild,
	ViewChildren,
	ViewEncapsulation
} from '@angular/core';


@Component({
	selector: 'div[model][entry]',
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

