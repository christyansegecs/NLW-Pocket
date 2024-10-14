import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

//type SummaryResponse = {
//  completed: number
//  total: number
//  goalsPerDay: Record<
//    string,
//    {
//      id: string
//      title: string
//      completedAt: string
//    }[]
//  >
//}

export function App() {
  //const [summary, setSummary] = useState<SummaryResponse | null>(null)

  //useEffect(() => {
  //  fetch('http://localhost:3333/summary')
  //    .then(response => {
  //      return response.json()
  //    })
  //    .then(data => {
  //      setSummary(data.summary)
  //      console.log(data)
  //    })
  //}, [])

  //const { data } = useQuery<SummaryResponse>({
  //  queryKey: ['summary'],
  //  queryFn: async () => {
  //    const response = await fetch('http://localhost:3333/summary')
  //    const data = await response.json()
  //    return data.summary
  //  },
  //})

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {/*<pre>{JSON.stringify(summary, null, 2)}</pre>*/}

      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      {/* <EmptyGoals /> */}
      <CreateGoal />
    </Dialog>
  )
}
