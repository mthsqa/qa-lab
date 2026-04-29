import { test, expect } from '@playwright/test'

test('busca retorna lista visível', async ({ page }) => {
  await page.goto('/busca')
  await page.getByLabel('Buscar').fill('notebook')
  await page.getByRole('button', { name: 'Buscar' }).click()
  await expect(page.getByRole('listitem').first()).toBeVisible()
})
