import { LitElement, property } from 'lit-element'

type Constructor = new (...args: any[]) => LitElement
type ISwisstopoElementMixin = <B extends Constructor>(
  Base: B,
) => {
  new (...args: any[]): {
    layerName?: string
  }
} & B

/**
 * Base mixin for swisstopo elements
 *
 * See [SwisstopoElement class](#/classes/SwisstopoElement)
 *
 * @polymer
 * @mixinFunction
 */
const SwisstopoElementMixin: ISwisstopoElementMixin = function<B extends Constructor> (Base: B) {
  /**
   * Base class for swisstopo elements
   *
   * @mixinClass
   */
  class SwisstopoElement extends Base {
    /**
     * One of the official layer names provided by geo.admin.ch.
     *
     * Complete list of layers is available
     * [here](http://api3.geo.admin.ch/api/faq/index.html#which-layers-are-available)
     *
     * @type {string}
     */
    @property({ type: String, attribute: 'layer-name' })
    public layerName?: string = undefined
  }

  return SwisstopoElement
}

export default SwisstopoElementMixin
