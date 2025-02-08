import {
  createResumeItemHelper,
  deleteResumeItemHelper,
  reorderArray,
  updateResumeItemDetailsHelper
} from "../../../src/entities/resume/model/helpers/common"
import { SectionEntity } from "../../../src/shared/types"

describe("reorderArray", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  test.each([
    [0, 1, [2, 1, 3, 4, 5, 6, 7, 8, 9, 10]],
    [0, 9, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]],
    [0, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    [9, 0, [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]]
  ])("Should return new array with reordered item from %s to %s", (from, to, expected) => {
    expect(reorderArray([...array], from, to)).toEqual(expected)
  })
})

describe("createSectionItemHelper", () => {
  beforeEach(() => {
    jest.spyOn(Date, "now").mockReturnValue(1234567890)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  const items = [
    createSectionItem({ id: "1234567890", job: "Job 1" }),
    createSectionItem({ id: "1234567890", job: "Job 2" }),
    createSectionItem({ id: "1234567890", job: "Job 3" })
  ]

  test.each([
    {
      state: items,
      item: { job: "Job 4" },
      expected: [...items, { id: "1234567890", job: "Job 4" }]
    },
    {
      state: items,
      item: { job: "Job 5" },
      expected: [...items, { id: "1234567890", job: "Job 5" }]
    },
    {
      state: items,
      item: { job: "Job 6" },
      expected: [...items, { id: "1234567890", job: "Job 6" }]
    }
  ])("Should create resume item", ({ state, item, expected }) => {
    expect(createResumeItemHelper([...state], item as SectionEntity)).toEqual(expected)
  })
})

describe("updateResumeItemDetailsHelper", () => {
  const items = [
    createSectionItem({ id: "1", job: "Job 1" }),
    createSectionItem({ id: "2", job: "Job 2" }),
    createSectionItem({ id: "3", job: "Job 3" })
  ]

  const cases = createReorderArrayCases(items)

  test.each(cases)(
    "Should update resume item details for item with id %s",
    ({ state: input, selectedId: id, values: updates, expected }) => {
      expect(updateResumeItemDetailsHelper([...input], id, updates)).toEqual(expected)
    }
  )
})

describe("deleteResumeItemHelper", () => {
  const items = [
    createSectionItem({ id: "1", job: "Job 1" }),
    createSectionItem({ id: "2", job: "Job 2" }),
    createSectionItem({ id: "3", job: "Job 3" })
  ]

  test.each([
    { deleteId: "1", items },
    { deleteId: "2", items },
    { deleteId: "3", items }
  ])("Should delete resume item with id %s", ({ deleteId, items }) => {
    expect(deleteResumeItemHelper([...items], deleteId)).toEqual(
      items.filter((it) => it.id !== deleteId)
    )
  })
})

interface ReorderCase {
  state: SectionEntity[]
  selectedId: string
  values: { job: string; description: string }
  expected: SectionEntity[]
}

function createReorderArrayCases(items: SectionEntity[]): ReorderCase[] {
  return [
    {
      state: items,
      selectedId: "1",
      values: { job: "New Job 1", description: "New Description 1" },
      expected: [
        { ...items[0], job: "New Job 1", description: "New Description 1" },
        items[1],
        items[2]
      ]
    },
    {
      state: items,
      selectedId: "2",
      values: { job: "New Job 2", description: "New Description 2" },
      expected: [
        items[0],
        { ...items[1], job: "New Job 2", description: "New Description 2" },
        items[2]
      ]
    },
    {
      state: items,
      selectedId: "3",
      values: { job: "New Job 3", description: "New Description 3" },
      expected: [
        items[0],
        items[1],
        { ...items[2], job: "New Job 3", description: "New Description 3" }
      ]
    }
  ]
}

function createSectionItem(overrides: Partial<SectionEntity> = {}): SectionEntity {
  return {
    id: "1",
    employer: "Default Employer",
    job: "Default Job",
    city: "Default City",
    country: "Default Country",
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    description: "Default Description",
    ...overrides
  }
}
