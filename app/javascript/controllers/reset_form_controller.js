 import { Controller } from "@hotwired/stimulus"

 export default class extends Controller {
     reset(event) {
         this.element.reset()
     }
 }