import {render, screen} from '@testing-library/react'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import TasksPage from './ViewMyTasks'

const real_server = setupServer(
    http.get('http://localhost:8080/tasks', () => {
        return HttpResponse.json(
        [{
            id: 0,
            title: 'test_title',
            description: 'test_description'
        },
        {
            id: 1,
            title: 'test_title 1',
            description: 'test_description 1'
        }]
    )
    }),
)

beforeAll(() => real_server.listen())
afterEach(() => real_server.resetHandlers())
afterAll(() => real_server.close())

test('test 0', async() => {
    render(<TasksPage />)
    expect(await screen.findByText('test_title')).toBeInTheDocument()
    expect(screen.getByText('test_description')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
})

test('test 1', async() => {
    render(<TasksPage />)
    expect(await screen.findByText('test_title 1')).toBeInTheDocument()
    expect(screen.getByText('test_description 1')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
})
