using System;
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

        // GET: api/Products/5/totalquantity
        [HttpGet("{id}/totalquantity")]
        public async Task<ActionResult<decimal>> GetTotalQuantitySold(int id)
        {
            var totalQuantity = await _context.TransactionDetails.Where(x => x.ProId == id).Select(x => x.Quantity).SumAsync();
            return totalQuantity;
        }

        // GET: api/Products/5/revenue
        [HttpGet("{id}/revenue")]
        public async Task<ActionResult<decimal>> GetRevenue(int id)
        {
            var revenue = await _context.TransactionDetails.Where(x => x.ProId == id).Select(x => x.TotalCost).SumAsync();
            return revenue;
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
