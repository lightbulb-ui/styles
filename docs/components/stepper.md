# Stepper

:::warning
You have to implement the active/inactive logic by your own. Just the class `olt-stepper__step-item--is-active` has to be added 
and remove for `olt-stepper__step-item` and the class `olt-stepper__content-item--is-active` to `olt-stepper__content-item`.
:::

<stepper></stepper>

````html
<section class="olt-stepper">
    <div class="olt-stepper__header">
        <div class="olt-stepper__step-item olt-stepper__step-item--is-active">
            <div class="olt-stepper__step-item-inner">
                <div class="olt-fab olt-fab--paginator">1</div>
                <span>Step</span>
            </div>
        </div>
        <div class="olt-stepper__step-item">
            <div class="olt-stepper__step-item-inner">
                <div class="olt-fab olt-fab--paginator">2</div>
                <span>Step</span>
            </div>
        </div>
        <div class="olt-stepper__step-item">
            <div class="olt-stepper__step-item-inner">
                <div class="olt-fab olt-fab--paginator">3</div>
                <span>Step</span>
            </div>
        </div>
    </div>
    <div class="olt-stepper__content">
        <div class="olt-stepper__content-item olt-stepper__content-item--is-active">
            Real-time, systems synergies cultivate iterate visualize incubate folksonomies cultivate remix capture strategize harness 
            leading-edge transparent, engineer target e-business. Reinvent, end-to-end networks, "value viral incentivize matrix dot-com 
            e-commerce innovate orchestrate evolve channels infomediaries syndicate, architectures methodologies folksonomies reinvent, 
            disintermediate." Podcasting authentic architectures infrastructures empower, niches embrace action-items users back-end, 
            maximize, action-items initiatives engage vertical. Web-enabled feeds networks rss-capable virtual reinvent empower e-services 
            extensible. Partnerships intuitive ecologies, "cutting-edge e-business," aggregate grow streamline deliverables.
        </div>
        <div class="olt-stepper__content-item">
            Models data-driven initiatives distributed user-contributed reinvent enhance redefine dynamic, functionalities, engage 
            monetize maximize enterprise, extend incentivize transform eyeballs. E-tailers bleeding-edge synergize, "weblogs webservices 
            initiatives user-contributed clicks-and-mortar?"
        </div>
        <div class="olt-stepper__content-item">
            Cluetrain users bleeding-edge reinvent, incentivize. Vertical e-services e-tailers solutions rss-capable innovative 
            user-centric, generate long-tail; brand matrix best-of-breed, wikis.
        </div>
    </div>
</section>
````

We use following script to calculate the dynamic width of `olt-stepper__step-item`.

````javascript
const elements = document.querySelectorAll('.olt-stepper__step-item');
const length = elements.length;
elements.forEach((element) => {
    // Each item should have the width of 100% / Number of elements
    element.style.width = `${100 / length}%`;
});
````

#### State Classes 
| Class                                        |                                      |
| -------------------------------------------- | ------------------------------------ |
| `olt-stepper__step-item--is-active`          | set step item to active              |
| `olt-stepper__content-item--is-active`       | set step content item to active      |