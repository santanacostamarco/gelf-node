import Gelf from './gelf'

const gelf = new Gelf()

gelf.emit('gelf.log', 'wahwah')
