﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back_end.Models;

namespace Back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly CRMContext _context;

        public ProductsController(CRMContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // GET: api/Products/5/inTransactions
        [HttpGet("{id}/inTransactions")]
        public async Task<ActionResult<IEnumerable<TransactionDetail>>> GetAllTransactions(int id)
        {
            var allTransaction = await _context.TransactionDetails.Where(x => x.ProId == id).ToListAsync();
            return allTransaction;
        }

        // GET: api/Products/5/numTransactions
        [HttpGet("{id}/numTransactions")]
        public async Task<ActionResult<int>> GetNumTransactions(int id)
        {
            var numTransaction = await _context.TransactionDetails.Where(x => x.ProId == id).CountAsync();
            return numTransaction;
        }

        // GET: api/Products/5/numSold
        [HttpGet("{id}/numSold")]
        public async Task<ActionResult<decimal>> GetNumProductSold(int id)
        {
            var numProductSold = await _context.TransactionDetails.Where(x => x.ProId == id).Select(x => x.Quantity).SumAsync();
            return numProductSold;
        }

        // GET: api/Products/sold
        [HttpGet("sold")]
        public async Task<ActionResult<int>> GetNumTypeSold()
        {
            var numSold = await _context.TransactionDetails.Select(x => x.ProId).Distinct().CountAsync();
            return numSold;
        }

        // GET: api/Products/5/revenue
        [HttpGet("{id}/revenue")]
        public async Task<ActionResult<decimal>> GetRevenue(int id)
        {
            var revenue = await _context.TransactionDetails.Where(x => x.ProId == id).Select(x => x.TotalCost).SumAsync();
            return revenue;
        }

        // GET: api/Products/mostSold
        [HttpGet("mostSold")]
        public dynamic GetMostSoldProducts()
        {

            var totalByEachProd =  from transactions in _context.TransactionDetails
                                   group transactions by transactions.ProId into g
                                   select g.Sum(x => x.Quantity);

            decimal max = totalByEachProd.Max();

            var soldOFProducts = from transactions in _context.TransactionDetails
                                 group transactions by transactions.ProId into g
                                 select new { 
                                     quantity = g.Sum(x => x.Quantity),
                                     proID = g.Key
                                 };

            var numSoldOFProducts = from transactions in _context.TransactionDetails
                                    join pr in _context.Products on transactions.ProId equals pr.Id
                                    group transactions by new { transactions.ProId, pr.Name, pr.Price, pr.Description } into g
                                    select new
                                    {
                                        quantity = g.Sum(x => x.Quantity),
                                        g.Key
                                    };

            return numSoldOFProducts;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Products
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductExists(product.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
