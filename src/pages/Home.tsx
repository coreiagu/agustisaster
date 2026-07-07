import styles from './Home.module.css'
import Cover from '../components/Cover/Cover'
import TornEdge from '../components/TornEdge/TornEdge'
import Index from '../components/Index/Index'
import Portrait from '../components/Portrait/Portrait'
import NepoverseFeature from '../components/NepoverseFeature/NepoverseFeature'
import ParteDiario from '../components/ParteDiario/ParteDiario'
import Breves from '../components/Breves/Breves'
import FichaTecnica from '../components/FichaTecnica/FichaTecnica'
import Interrogatorio from '../components/Interrogatorio/Interrogatorio'
import CartasDirector from '../components/CartasDirector/CartasDirector'

export default function Home() {
  return (
    <div className={styles.root}>
      <Cover />
      <TornEdge variant="blackToPaper" />
      <div className={styles.paper}>
        <div className={styles.grainOverlay} />
        <Index />
        <TornEdge variant="paperToBlack" />
        <Portrait />
        <NepoverseFeature />
        <ParteDiario />
        <Breves />
        <FichaTecnica />
        <Interrogatorio />
        <CartasDirector />
      </div>
    </div>
  )
}
