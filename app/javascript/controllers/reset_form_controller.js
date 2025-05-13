 import { Controller } from "@hotwired/stimulus"

 export default class extends Controller {
     connect() {
         alert("Controller connected!")

         console.log("Controller name:", this.identifier)
         console.log("Element:", this.element)
     }

     reset(event) {
         console.log("Reset method called", event)
         console.log("Form element:", this.element)
         this.element.reset()
     }
 }